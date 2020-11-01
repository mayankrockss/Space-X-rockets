import FilterButton from './FilterButton';
import "./filter.css";

function Filters({ yearFilter, launchFilter, landingFilter }) {
    const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
    return (
        <div className="filters">
            <h4>Filters</h4>

            <span className="label">Launch Years</span>
            <div className="filter-btns">
                {years.map(year => <FilterButton key={year} data={year} data-value={year} data-type="year" isactive={yearFilter === year.toString()} />)}
            </div>

            <span className="label">Launch</span>
            <div className="filter-btns">
                <FilterButton data={"Success"} data-value={true} data-type="launch" isactive={launchFilter === "true"} />
                <FilterButton data={"Failure"} data-value={false} data-type="launch" isactive={launchFilter === "false"} />
            </div>
            <span className="label">Landing</span>
            <div className="filter-btns">
                <FilterButton data={"Success"} data-value={true} data-type="landing" isactive={landingFilter === "true"} />
                <FilterButton data={"Failure"} data-value={false} data-type="landing" isactive={landingFilter === "false"} />
            </div>
        </div>
    )
}

export default Filters
