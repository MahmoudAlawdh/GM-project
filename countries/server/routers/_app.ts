/**
 * This file contains the root router of your tRPC-backend
 */
import { createRouter } from '../createRouter'
import { countryRouter } from './country'
import superjson from 'superjson'

/**
 * Create your application's root router
 * If you want to use SSG, you need export this
 * @link https://trpc.io/docs/ssg
 * @link https://trpc.io/docs/router
 */
export const appRouter = createRouter()
  /**
   * Add data transformers
   * @link https://trpc.io/docs/data-transformers
   */
  .transformer(superjson)

  /**
   * Optionally do custom error (type safe!) formatting
   * @link https://trpc.io/docs/error-formatting
   */
  // .formatError(({ shape, error }) => { })

  /**
   * Merge `countryRouter` under `infiniteCountries`
   */
  .merge('infiniteCountries', countryRouter)

export type AppRouter = typeof appRouter