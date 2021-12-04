import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter, limit, setLimit }) => {
    return (
        <div className="post-filter-wrapper">
            <MyInput
                placeholder="Search.."
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
            />
            <MySelect
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                value={filter.sort}
                defaultOption="Sort" options={[
                    { value: 'title', name: 'Title' },
                    { value: 'body', name: 'Description' }
                ]} />
            <MySelect
                onChange={value => setLimit(value)}
                value={limit}
                defaultOption="Pagination step"
                options={[
                    { value: 5, name: '5' },
                    { value: 10, name: '10' },
                    { value: 15, name: '15' },
                    { value: -1, name: 'All' }
                ]} />
        </div>
    );
}

export default PostFilter;
