export interface BaseRepository<T, CreateDTO, UpdateDTO = Partial<CreateDTO>> {
  findAll(options?: Record<string, any>): Promise<T[]>
  findById(id: number): Promise<T | null>
  create(data: CreateDTO): Promise<T>
  update(id: number, data: UpdateDTO): Promise<T>
  delete(id: number): Promise<void>
}

