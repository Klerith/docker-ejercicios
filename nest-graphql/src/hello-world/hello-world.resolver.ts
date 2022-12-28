import { Float, Query, Resolver, Int, Args } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query( () => String, { description: 'Hola Mundo es lo que retorna', name: 'hello' } )
    helloWorld(): string {
        return 'Hola Mundo - desde mi contenedor';
    }

    @Query( () => Float, { name: 'randomNumber' } )
    getRandomNumber(): number {
        return Math.random() * 100;
    }
    
    // randomFromZeroTo
    @Query( () => Int, { name: 'randomFromZeroTo', description: 'From zero to argument TO (default 6)' } )
    getRandomFromZeroTo( 
        @Args('to', { nullable: true, type: () => Int } ) to: number = 6
    ): number {
        return Math.floor( Math.random() * to );
    }

}
