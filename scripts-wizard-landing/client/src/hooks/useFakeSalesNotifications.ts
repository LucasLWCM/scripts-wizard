import { useEffect } from 'react';
import { toast } from 'sonner';

interface FakeSale {
  name: string;
  city: string;
}

const FIRST_NAMES = [
  'Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo', 'Fernanda', 'Gabriel', 'Helena',
  'Igor', 'Juliana', 'Kevin', 'Larissa', 'Marcelo', 'Natália', 'Otávio', 'Patricia',
  'Quentin', 'Rafaela', 'Samuel', 'Tânia', 'Ulisses', 'Vanessa', 'Wagner', 'Ximena',
  'Yuri', 'Zilda', 'Adriano', 'Beatriz', 'Cláudio', 'Denise', 'Emerson', 'Fabiana',
  'Gustavo', 'Heloísa', 'Ivo', 'Joana', 'Karina', 'Leonardo', 'Mariana', 'Norberto',
  'Olivia', 'Paulo', 'Quirino', 'Rosana', 'Sergio', 'Tatiana', 'Urbano', 'Vera',
  'Waldemar', 'Ximena', 'Yasmin', 'Zé'
];

const LAST_NAMES = [
  'Silva', 'Santos', 'Oliveira', 'Souza', 'Costa', 'Ferreira', 'Gomes', 'Martins',
  'Pereira', 'Carvalho', 'Alves', 'Dias', 'Barbosa', 'Ribeiro', 'Rocha', 'Monteiro',
  'Teixeira', 'Machado', 'Cavalcanti', 'Neves', 'Mendes', 'Pinto', 'Lopes', 'Moreira',
  'Vieira', 'Campos', 'Tavares', 'Ramos', 'Correia', 'Fonseca', 'Marques', 'Soares',
  'Azevedo', 'Leite', 'Batista', 'Vargas', 'Stein', 'Melo', 'Braga', 'Vaz'
];

const CITIES = [
  'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Brasília', 'Salvador', 'Fortaleza',
  'Curitiba', 'Manaus', 'Recife', 'Porto Alegre', 'Belém', 'Goiânia', 'Guarulhos',
  'Campinas', 'São Gonçalo', 'Maceió', 'Duque de Caxias', 'Santo André', 'Osasco',
  'São Bernardo do Campo', 'Campo Grande', 'João Pessoa', 'Jaboatão', 'Natal', 'Teresina',
  'São Luís', 'Sorocaba', 'Maringá', 'Londrina', 'Ribeirão Preto', 'Ipatinga', 'Contagem',
  'Uberlândia', 'Feira de Santana', 'Aparecida de Goiânia', 'Joinville', 'Blumenau',
  'Niterói', 'Caruaru', 'Petrolina', 'Anápolis', 'Piracicaba', 'Campina Grande'
];

const generateRandomSale = (): FakeSale => {
  const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
  const city = CITIES[Math.floor(Math.random() * CITIES.length)];

  return {
    name: `${firstName} ${lastName}`,
    city
  };
};

const getRandomInterval = (): number => {
  return Math.random() * (60000 - 30000) + 30000;
};

export const useFakeSalesNotifications = () => {
  useEffect(() => {
    let nextTimeout: NodeJS.Timeout;

    const showNotification = () => {
      const sale = generateRandomSale();
      toast.success(`${sale.name} de ${sale.city} adquiriu o Wizard!`, {
        duration: 5000,
      });

      const nextInterval = getRandomInterval();
      nextTimeout = setTimeout(showNotification, nextInterval);
    };

    nextTimeout = setTimeout(showNotification, 5000);

    return () => {
      clearTimeout(nextTimeout);
    };
  }, []);
};
