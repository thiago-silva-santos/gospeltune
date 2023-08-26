export interface ISongCifra {
     id: string;
     tipo: string;
     nome: string;
     tonalidade: number;
     categoria: SongCategoria[];
     cifra: ICifra[]
}


type SongCategoria = "Envolvente" | "Introspectivo" | "Missões" | "Jovens" | "Santa Ceia"

export interface ICifra {
     chords: string;
     verse: string
}