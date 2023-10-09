function Index({ items }) {
    return (
      <div>
        <h2>Item Index</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }

export default Index;
