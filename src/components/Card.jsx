function Card(props) {
  return (
    <div
      className={`column has-text-centered box is-3 mx-4 my-4 has-background-${props.mode}`}
    >
      <div className={`subtitle ${props.mode}`}>#{props.rank}</div>
      <div className="level">
          <div className="level-item">
        <figure class="image is-128x128 ">
          <img src={props.data.owner.avatar_url} class="is-rounded" />
        </figure>
        </div>
      </div>
      <div className={`subtitle selected`}>{props.data.name}</div>
       <div className='tags are-small is-centered'>
       <span className={`tag is-primary`}>{`⭐ ${props.data.stargazers_count} stars`}</span>
      <span className={`tag is-primary`}>{`🍴 ${props.data.forks_count} forks`}</span>
       </div>
      
    </div>
  );
}

export default Card;
