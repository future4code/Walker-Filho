//import React from "react";
import { DetailsPageContainer } from './styled';
import { PokeHeader } from '../../components/poke-header/poke-header';
import { PokeStats } from '../../components/poke-stats/poke-stats';
import { PokeImg } from '../../components/poke-img/poke-img';

export const DetailsPage = () => {
    return (
        <DetailsPageContainer>
            <div style={{width: '40%'}}>
                <PokeHeader>
                    Bulbasaur
                    Grass Poison
                </PokeHeader>
                <PokeStats>
                    Stats
                    HP 100
                    Attack 100
                    Defense 100
                </PokeStats>
            </div>    
            <PokeImg>

            </PokeImg>
        </DetailsPageContainer>
    )
}