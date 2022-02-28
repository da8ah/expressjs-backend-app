import { Response, RequestHandler } from 'express';
import Video from './Video';

export const createVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({ url: req.body.url });
    if (videoFound) return res.status(303).json(videoFound);

    const newVideo = new Video(req.body);
    const savedVideo = await newVideo.save();
    return res.json(savedVideo);
};

export const getAll: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find();

        return res.json(videos);
    } catch (error) {
        return res.json(error);
    }
};

export const getVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findById(req.params.id);
    if (!videoFound) return res.status(204).json();

    return res.json(videoFound);
};

export const deleteVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findByIdAndDelete(req.params.id);
    if (!videoFound) return res.status(204).json();

    return res.json(videoFound);
};

export const updateVideo: RequestHandler = async (req, res): Promise<Response> => {
    const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    if (!videoUpdated) return res.status(204).json();
    return res.json(videoUpdated);
};