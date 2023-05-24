import { Column, CreateDateColumn , Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import User from './user.entitie'

@Entity('contacts')
class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'varchar'})
    contactName: string

    @Column({type: 'varchar', unique: true})
    contactEmail: string
    
    @Column({type: 'varchar', unique: true})
    contactCellphone: string
    
    @CreateDateColumn({type: 'date'})
    contactCreateAt: string

    @ManyToOne(() => User)
    user: User
}

export default Contact