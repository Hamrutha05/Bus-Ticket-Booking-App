import React from 'react'
import styled from 'styled-components'
import Form from "react-bootstrap/Form";
import { Buses, locations } from "../utilis";
import { Button } from 'bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import BusList from './BusList';

const Container = styled.div`
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
    text-align: center;
`

export default function BusSearch({ searchState, setSearchState }) {

    const [filteredBus, setFilteredBus] = useState(null);

    const handleSearch = () => {
        setFilteredBus(Buses.filter(
            (data) => data.source === searchState.from && data.destination === searchState.to && data.availableDates.includes(searchState.date)));
    };

    return (
        <Container>
            <pre className='mb-3'><b>S E A R C H   F O R   B U S</b></pre>
            <div className=".d-flex flex-column align-items-center">
                <Form.Select className="mb-3 width-300"
                    value={searchState.from}
                    onChange={(e) => setSearchState((prevState) => ({
                        ...prevState,
                        from: e.target.value
                    }))}
                >
                    {locations.map((data) => (
                        <option key={`${data}-source`} value={data}>
                            {data}
                        </option>
                    ))}

                </Form.Select>
                <Form.Select className="mb-3 width-300"
                    value={searchState.to}
                    onChange={(e) => setSearchState((prevState) => ({
                        ...prevState,
                        to: e.target.value
                    }))}
                >
                    {locations.map((data) => (
                        <option key={`${data}-destination`} value={data}>
                            {data}
                        </option>
                    ))}

                </Form.Select>
                <input className='form-control mb-3 width-300'
                type='date'
                value={searchState.date}
                onChange={(e) => setSearchState((prevState) => ({...prevState,date: e.target.value
                }))}
                />
            </div>
            <ButtonGroup variant="primary" className="mb-3" onclick={handleSearch}>
                Search
            </ButtonGroup>

            {filteredBus && filteredBus?.length > 0 &&  <BusList /> }
            {filteredBus && filteredBus.length < 1 &&  <h3>No Buses Found</h3>}
            
        </Container>
    );
}
