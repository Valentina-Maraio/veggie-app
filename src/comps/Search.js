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
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                    <Button variant="secondary" id="search-btn">
                    Search
                    </Button>
            </InputGroup>
        </div>
    )
}

export default Search
