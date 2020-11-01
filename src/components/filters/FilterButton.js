function FilterButton(props) {
    const { data, isactive } = props;
    return (
        <div>
            <button className={`filter-button ${isactive ? "active" : ""}`} {...props} isactive="">{data}</button>
        </div>
    )
}

export default FilterButton
