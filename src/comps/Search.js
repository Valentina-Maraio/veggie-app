import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Search = () => {
    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Search a recipes"
                />
                    <Button variant="warning" id="search-btn">
                    Search
                    </Button>
            </InputGroup>
        </div>
    )
}

export default Search
