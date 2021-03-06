import { AxiosResponse } from 'axios';

import HttpClient from '../HttpClient';
import { Planets, Options, SwapiPagination } from './interfaces';

class Swapi extends HttpClient {
  public async getAllPlanets(
    options?: Options
  ): Promise<SwapiPagination<Planets>> {
    try {
      const res: AxiosResponse<SwapiPagination<Planets>> = await this.get<
        Planets,
        AxiosResponse<SwapiPagination<Planets>>
      >('planets/', {
        params: { page: options?.page, search: options?.search },
      });

      return this.success(res);
    } catch (error) {
      throw error;
    }
  }

  public async getPlanet(id: number): Promise<Planets> {
    try {
      const res: AxiosResponse<Planets> = await this.get<
        Planets,
        AxiosResponse<Planets>
      >(`planets/${id}/`);

      return this.success(res);
    } catch (error) {
      throw error;
    }
  }
}

export default new Swapi({ baseURL: 'https://swapi.dev/api/' });
