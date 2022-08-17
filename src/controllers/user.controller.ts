import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
	console.log(
		await prisma.user.create({
			data: {
				name: 'John Doe',
			},
		}),
	);
	return res.json(await prisma.user.findMany());
};

export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.body;
	await prisma.user.delete({
		where: { id },
	});
	return res.json({
		status: 'ok',
		message: 'User deleted successfully',
	});
};
