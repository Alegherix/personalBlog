import { Archivo, Roboto } from '@next/font/google';
import { Font } from 'types/shared';


export const archivo = Archivo({weight: '900'})
export const roboto = Roboto({ weight: '400' })

export const fontMap: Record<Font, string> = {
    archivo: archivo.className,
    roboto: roboto.className
}