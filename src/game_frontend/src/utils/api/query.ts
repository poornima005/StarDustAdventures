import { ActorSubclass } from "@dfinity/agent"
import { _SERVICE } from "../../../../declarations/StarDustAdventures_backend/StarDustAdventures_backend.did"
import { useQuery } from "react-query"
import api from "."

export const GET_USER = (actor : ActorSubclass<any>)=>{
    return useQuery('user', async()=>api.query(()=>actor.getUser()))
}

export const GET_USER_FRIENDS = (actor : ActorSubclass<_SERVICE>)=>{
    return useQuery('user_friends',async()=>api.query(()=>actor.getUserFriends()))
}

export const GET_USER_POINTS = (actor : ActorSubclass<any>)=>{
    return useQuery('user_points',async()=>api.query(()=>actor.getPoints()))
}

export const GET_REFERAL_ID = (actor : ActorSubclass<_SERVICE>)=>{
    return useQuery('ref_id',async()=>api.query(()=>actor.generateRefId()))
}