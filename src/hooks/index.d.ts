// src/hooks/index.d.ts

import { ReactNode } from "react";

export function useInterval(callback: () => void, delay: number | null): void;

export function usePrevious<T>(value: T): T;
