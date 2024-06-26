function MfeErrorLoading({ ...props }: any) {
  return (
    <div>
      <h1>Error Loading Micro Frontend</h1>
      <p>There was an error loading the Micro Frontend.</p>
      <p>{props.error}</p>
    </div>
  );
}

export default MfeErrorLoading;
