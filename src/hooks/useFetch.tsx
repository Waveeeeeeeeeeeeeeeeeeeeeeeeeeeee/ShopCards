import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store/store";

export interface IAsyncRequestState<T> {
	data: T;
	status: "idle" | "loading" | "succeeded" | "failed";
	error: Error | null | string;
}

export interface IUseFetch<T> {
	thunk: AsyncThunk<T, string, object>;
	url: string;
	stateSelector: (state: RootState) => IAsyncRequestState<T>;
}

export const useFetch = <T,>({
	thunk,
	url,
	stateSelector,
}: IUseFetch<T>): IAsyncRequestState<T> => {
	const dispatch = useDispatch<AppDispatch>();
	const { data, status, error } = useSelector(stateSelector);

	useEffect(() => {
		if (status === "idle") {
			dispatch(thunk(url));
		}
	}, [dispatch, url, status, thunk]);
	return { data, status, error };
};
