import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import Api from 'services/Api';
import { CharacterType } from 'types/CharacterType';

interface IContextProps {
  characters: CharacterType[];
  character: CharacterType | null;
  isLoading: boolean;
  totalPages: number;
  currentPage: number;
  error: string | null;
  fetchCharacter: (id: number | string) => Promise<void>;
  fetchCharacters: (page: number, search?: string) => Promise<void>;
}

interface ICharactersProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

export const CharactersProvider: React.FC<ICharactersProviderProps> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = useCallback(async (page: number, search?: string) => {
    const limit = 36;
    const offset = (page - 1) * limit;

    setIsLoading(true);
    setError(null);

    const params = {
      offset,
      limit,
      nameStartsWith: search?.length ? search : undefined,
    };

    try {
      const response = await Api.get('/characters', {
        params,
      });
      setCurrentPage(page);
      setCharacters((prevCharacters) => [
        ...prevCharacters,
        ...response.data.data.results,
      ]);
      setTotalPages(response.data.data.total / limit);
    } catch {
      // eslint-disable-next-line no-console
      setError('Falha no carregamento da API');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchCharacter = useCallback(async (id: number | string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await Api.get(`/characters/${id}`);
      setCharacter(response.data.data.results[0]);
    } catch {
      // eslint-disable-next-line no-console
      setError('Falha no carregamento da API');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          characters,
          character,
          isLoading,
          totalPages,
          currentPage,
          error,
          fetchCharacters,
          fetchCharacter,
        }),
        [
          characters,
          character,
          isLoading,
          totalPages,
          currentPage,
          error,
          fetchCharacters,
          fetchCharacter,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useCharacters = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useCharacters must be within CharactersProvider');
  }

  return context;
};
