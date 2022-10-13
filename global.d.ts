import { Entity } from '@platformatic/sql-mapper';
import graphqlPlugin from '@platformatic/sql-graphql'
import { Demo } from './types/Demo'

declare module '@platformatic/sql-mapper' {
  interface Entities {
    demo: Entity<Demo>,
  }
}
