import React, { useState } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { Buses, locations } from '../utilis';
import { Button } from 'react-bootstrap';
import BusList from './BusList';

const Page = styled.div`
    min-height: calc(100vh - 70px);
    background: #f8fafc;
    padding-bottom: 60px;
`;

const Hero = styled.div`
    min-height: 380px;
    padding: 70px 20px 120px;
    text-align: center;
    background: linear-gradient(
        135deg,
        #2a0f2a,
        #7a1e8a,
        #eb25eb
    );
    color: white;
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 15px;
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid white;
    width: 0;
    margin-left: auto;
    margin-right: auto;
    animation: typing 3s steps(25, end) forwards,
               blink 0.7s infinite;

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 25ch;
        }
    }

    @keyframes blink {
        50% {
            border-color: transparent;
        }
    }

    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
`;

const Subtitle = styled.p`
    font-size: 1.1rem;
    color: #dbeafe;
    margin-bottom: 0;
`;

const SearchContainer = styled.div`
    max-width: 950px;
    margin: -80px auto 0;
    position: relative;
    z-index: 2;
    background: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(15, 23, 42, 0.15);
`;

const SearchTitle = styled.h4`
    color: #0f172a;
    font-weight: 700;
    margin-bottom: 25px;
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
    background: #43094a;
    border: none;

    &:hover {
        background: #26032a;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Features = styled.div`
    max-width: 950px;
    margin: 60px auto 0;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const FeatureCard = styled.div`
    background: white;
    padding: 25px;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 8px 25px rgba(15, 23, 42, 0.08);
    transition: 0.3s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
    }
`;

const Icon = styled.div`
    font-size: 35px;
    margin-bottom: 10px;
`;

const FeatureTitle = styled.h5`
    color: #2a0f28;
    font-weight: 700;
    margin-bottom: 8px;
`;

const FeatureText = styled.p`
    color: #64748b;
    font-size: 14px;
    margin: 0;
`;

const DestinationSection = styled.div`
    max-width: 950px;
    margin: 60px auto 0;
    padding: 0 20px;
`;

const SectionTitle = styled.h3`
    text-align: center;
    color: #290f2a;
    font-weight: 700;
    margin-bottom: 25px;
`;

const Destinations = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const DestinationCard = styled.div`
    background: linear-gradient(135deg, #fedbfe, #eff6ff);
    padding: 25px 15px;
    border-radius: 14px;
    text-align: center;
    color: #781e8a;
    font-weight: 700;
    transition: 0.3s;

    &:hover {
        transform: scale(1.03);
    }
`;

export default function BusSearch({ searchState, setSearchState }) {

    const [filteredBus, setFilteredBus] = useState(null);

    const handleSearch = () => {
        setFilteredBus(
            Buses.filter(
                (data) =>
                    data.source === searchState.from &&
                    data.destination === searchState.to &&
                    data.availableDates.includes(searchState.date)
            )
        );
    };

    return (
        <Page>

            {/* HERO SECTION */}
            <Hero>
                <Title>
                    Your Journey Starts Here 🚌
                </Title>

                <Subtitle>
                    Book your bus tickets easily, quickly and comfortably
                </Subtitle>
            </Hero>

            {/* SEARCH BOX */}
            <SearchContainer>

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
                        onClick={handleSearch}
                    >
                        🔍 Search
                    </SearchButton>

                </SearchRow>

            </SearchContainer>

            {/* SEARCH RESULTS */}
            {filteredBus && filteredBus.length > 0 && (
                <BusList buses={filteredBus} />
            )}

            {filteredBus && filteredBus.length < 1 && (
                <h3
                    style={{
                        textAlign: 'center',
                        marginTop: '40px',
                        color: '#64748b'
                    }}
                >
                    No Buses Found 🚌
                </h3>
            )}

            {/* FEATURES */}
            <Features>

                <FeatureCard>
                    <Icon>⚡</Icon>
                    <FeatureTitle>Quick Booking</FeatureTitle>
                    <FeatureText>
                        Search and book your bus tickets in just a few clicks.
                    </FeatureText>
                </FeatureCard>

                <FeatureCard>
                    <Icon>💺</Icon>
                    <FeatureTitle>Choose Your Seat</FeatureTitle>
                    <FeatureText>
                        Select your preferred seat before completing your booking.
                    </FeatureText>
                </FeatureCard>

                <FeatureCard>
                    <Icon>🔒</Icon>
                    <FeatureTitle>Secure Booking</FeatureTitle>
                    <FeatureText>
                        Your booking information is kept safe and secure.
                    </FeatureText>
                </FeatureCard>

            </Features>

            {/* POPULAR DESTINATIONS */}
            <DestinationSection>

                <SectionTitle>
                    🌟 Popular Destinations
                </SectionTitle>

                <Destinations>

                    <DestinationCard>
                        🏙️ Chennai
                    </DestinationCard>

                    <DestinationCard>
                        🌴 Coimbatore
                    </DestinationCard>

                    <DestinationCard>
                        🏛️ Madurai
                    </DestinationCard>

                    <DestinationCard>
                        🌊 Nagercoil
                    </DestinationCard>

                </Destinations>

            </DestinationSection>

        </Page>
    );
}