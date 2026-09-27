import React, { useState } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { Buses, locations } from '../utilis';
import { Button } from 'react-bootstrap';
import BusList from './BusList';

const Page = styled.div`
    min-height: calc(100vh - 70px);
    background: #f1f5f9;
    padding: 50px 20px;
`;

const Hero = styled.div`
    text-align: center;
    margin-bottom: 30px;
`;

const Title = styled.h2`
    font-size: 2.2rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 8px;
`;

const Subtitle = styled.p`
    color: #64748b;
    font-size: 1rem;
    margin: 0;
`;

const Container = styled.div`
    max-width: 900px;
    margin: auto;
    background: white;
    padding: 30px;
    border-radius: 18px;
    box-shadow: 0px 8px 25px rgba(15, 23, 42, 0.12);
`;

const SearchTitle = styled.h5`
    color: #0f172a;
    font-weight: 600;
    text-align: left;
    margin-bottom: 20px;
`;

const SearchRow = styled.div`
    display: flex;
    gap: 15px;
    align-items: end;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

const Field = styled.div`
    flex: 1;
    text-align: left;
`;

const Label = styled.label`
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #475569;
    margin-bottom: 7px;
`;

const StyledSelect = styled(Form.Select)`
    height: 48px;
    border-radius: 10px;
    border: 1px solid #cbd5e1;

    &:focus {
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
    }
`;

const StyledDate = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 10px;
    border: 1px solid #cbd5e1;
    padding: 0 12px;
    color: #334155;

    &:focus {
        outline: none;
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
    }
`;

const SearchButton = styled(Button)`
    height: 48px;
    padding: 0 28px;
    border-radius: 10px;
    font-weight: 600;
    background: #0f172a;
    border: none;

    &:hover {
        background: #0f172a;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export default function BusSearch({ searchState, setSearchState }) {

    const [filteredBus, setFilteredBus] = useState(null);

    const handleSearch = () => {
        setFilteredBus(Buses.filter(
            (data) =>
                data.source === searchState.from &&
                data.destination === searchState.to &&
                data.availableDates.includes(searchState.date)
        ));
    };

    return (
        <Page>

            <Hero>
                <Title>Book Your Journey With Ease 🚌</Title>
                <Subtitle>
                    Find buses, choose your destination and travel comfortably
                </Subtitle>
            </Hero>

            <Container>

                <SearchTitle>
                    🔍 Search for Buses
                </SearchTitle>

                <SearchRow>

                    <Field>
                        <Label>From</Label>

                        <StyledSelect
                            value={searchState.from}
                            onChange={(e) =>
                                setSearchState((prevState) => ({
                                    ...prevState,
                                    from: e.target.value
                                }))
                            }
                        >
                            {locations.map((data) => (
                                <option
                                    key={`${data}-source`}
                                    value={data}
                                >
                                    {data}
                                </option>
                            ))}
                        </StyledSelect>
                    </Field>

                    <Field>
                        <Label>To</Label>

                        <StyledSelect
                            value={searchState.to}
                            onChange={(e) =>
                                setSearchState((prevState) => ({
                                    ...prevState,
                                    to: e.target.value
                                }))
                            }
                        >
                            {locations.map((data) => (
                                <option
                                    key={`${data}-destination`}
                                    value={data}
                                >
                                    {data}
                                </option>
                            ))}
                        </StyledSelect>
                    </Field>

                    <Field>
                        <Label>Travel Date</Label>

                        <StyledDate
                            type="date"
                            value={searchState.date}
                            onChange={(e) =>
                                setSearchState((prevState) => ({
                                    ...prevState,
                                    date: e.target.value
                                }))
                            }
                        />
                    </Field>

                    <SearchButton
                        variant="primary"
                        onClick={handleSearch}
                    >
                        🔍 Search
                    </SearchButton>

                </SearchRow>

            </Container>

            {filteredBus && filteredBus.length > 0 && (
                <BusList buses={filteredBus} />
            )}

            {filteredBus && filteredBus.length < 1 && (
                <h3
                    style={{
                        textAlign: 'center',
                        marginTop: '30px',
                        color: '#64748b'
                    }}
                >
                    No Buses Found 🚌
                </h3>
            )}

        </Page>
    );
}