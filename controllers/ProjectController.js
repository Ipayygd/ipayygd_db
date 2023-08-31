import { PrismaClient } from "@prisma/client";
import { response } from "express";

const prisma = new PrismaClient();

export const getProjects = async (req, res) => {
  try {
    const response = await prisma.project.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getProjectById = async (req, res) => {
  try {
    const response = await prisma.project.findUnique({
      where: {
        id: Number(req.params.id)
      }
    })
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createProject = async (req, res) => {
  const { title, description, category, image, link } = req.body;
  try {
    const project = await prisma.project.create({
      data: {
        title,
        description,
        category,
        image,
        link
      }
    })
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const updateProject = async (req, res) => {
  const { title, description, category, image, link } = req.body;
  try {
    const project = await prisma.project.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        title,
        description,
        category,
        image,
        link
      }
    })
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const deleteProject = async (req, res) => {
  try {
    const project = await prisma.project.delete({
      where: {
        id: Number(req.params.id)
      }
    })
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}