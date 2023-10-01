import { useNavigate } from 'react-router-dom';

function HomeBtn() {
  let navigate = useNavigate();

  function goCenter() {
    navigate(`/`);
  }

  return (
    <button
      type="button"
      class="btn btn-outline-default g-col-3 g-start-6"
      onClick={goCenter}
    >
      Home
    </button>
  );
}

export default HomeBtn;
