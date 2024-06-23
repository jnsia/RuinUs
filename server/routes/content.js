const express = require("express");
const { User, Content } = require("../models");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/:encodeToken", async (req, res, next) => {
  const encodeToken = req.params.encodeToken;
  const { id } = jwt.verify(encodeToken, "jwt-secret-key");

  try {
    const contents = await Content.findAll({
      where: {
        writer: id,
      },
      order: [["createdAt", "DESC"]],
    });

    const now = new Date();

    contents.forEach((content) => {
      if (content.reserve < now) {
        Content.destroy({ where: { id: content.id } });
      }
    });

    const newContents = await Content.findAll({
      where: {
        writer: id,
      },
      order: [["createdAt", "DESC"]],
    });

    res.status(200).send(newContents);
  } catch (err) {
    next(err);
  }
});

router.post("/:encodeToken", async (req, res, next) => {
  const encodeToken = req.params.encodeToken;
  const { id } = jwt.verify(encodeToken, "jwt-secret-key");

  const { title, texts, cause, sort, reserve } = req.body;

  const causeStr = cause.join(",");
  const sortStr = sort.join(",");

  const content = {
    writer: id,
    title,
    texts,
    cause: causeStr,
    sort: sortStr,
    reserve: reserve,
  };

  try {
    await Content.create(content);
    res.status(200).send({ message: "Success" });
  } catch (err) {
    next(err);
  }
});

router.get("/:postId/:encodeToken", async (req, res, next) => {
  const { postId, encodeToken } = req.params;
  const { id } = jwt.verify(encodeToken, "jwt-secret-key");

  try {
    const content = await Content.findOne({
      where: {
        id: postId,
      },
    });

    let hashtags = [...content.cause.split(","), ...content.sort.split(",")];

    const response = {
      id: content.id,
      title: content.title,
      texts: content.texts,
      hashtags,
      reserve: content.reserve,
    };

    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
});

router.get("/rewrite/:postId/:encodeToken", async (req, res, next) => {
  const { postId, encodeToken } = req.params;
  const { id } = jwt.verify(encodeToken, "jwt-secret-key");

  try {
    const content = await Content.findOne({
      where: {
        id: postId,
      },
    });

    const response = {
      id: content.id,
      title: content.title,
      texts: content.texts,
      cause: content.cause.split(","),
      sort: content.sort.split(","),
      reserve: content.reserve,
    };

    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
});

router.post("/rewrite/:postId/:encodeToken", async (req, res, next) => {
  const { postId, encodeToken } = req.params;
  const { id } = jwt.verify(encodeToken, "jwt-secret-key");

  const { title, texts, cause, sort, reserve } = req.body;

  const causeStr = cause.join(",");
  const sortStr = sort.join(",");

  try {
    const content = await Content.findOne({
      where: {
        id: postId,
      },
    });

    const newContent = {
      writer: id,
      title,
      texts,
      cause: causeStr,
      sort: sortStr,
      reserve: reserve,
    };

    await content.update(newContent);
    res.status(200).send({ message: "Success" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
