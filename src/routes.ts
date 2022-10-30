import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "Ignite - Node.js",
    duration: 10,
    educator: "Dani"
  });

  return response.send();
}