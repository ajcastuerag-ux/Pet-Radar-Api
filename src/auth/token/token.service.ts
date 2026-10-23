import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {

    constructor (private JwtService: JwtService){}

    async generate(userId:number) : Promise<string> {
        const token = await this.JwtService.signAsync({id: userId});
        return token;
    }

    async getUserId(token:string){
       try {
        const payload = await this.JwtService.verifyAsync(token);
        return payload.id;
       }
       catch(error){
        throw new UnauthorizedException("El token no es valido o esta expirado")
       }
    }
}
