export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      brands: {
        Row: {
          id: number
          value: string
        }
        Insert: {
          id?: number
          value: string
        }
        Update: {
          id?: number
          value?: string
        }
        Relationships: []
      }
      colors: {
        Row: {
          id: number
          value: string
        }
        Insert: {
          id?: number
          value: string
        }
        Update: {
          id?: number
          value?: string
        }
        Relationships: []
      }
      models: {
        Row: {
          id: number
          value: string
        }
        Insert: {
          id?: number
          value: string
        }
        Update: {
          id?: number
          value?: string
        }
        Relationships: []
      }
      post: {
        Row: {
          created_at: string
          id: number
          name: string | null
          updatedAt: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          updatedAt?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          updatedAt?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          category: Database["public"]["Enums"]["category"]
          created_at: string
          created_by: string | null
          id: string
          image_url: string | null
          price: number
          product_id: number
          updated_at: string | null
        }
        Insert: {
          category: Database["public"]["Enums"]["category"]
          created_at?: string
          created_by?: string | null
          id: string
          image_url?: string | null
          price: number
          product_id?: number
          updated_at?: string | null
        }
        Update: {
          category?: Database["public"]["Enums"]["category"]
          created_at?: string
          created_by?: string | null
          id?: string
          image_url?: string | null
          price?: number
          product_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_created_by_users_id_fk"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      sizes: {
        Row: {
          id: number
          value: Database["public"]["Enums"]["size"]
        }
        Insert: {
          id?: number
          value: Database["public"]["Enums"]["size"]
        }
        Update: {
          id?: number
          value?: Database["public"]["Enums"]["size"]
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          display_name: string | null
          email: string
          id: string
          image_url: string | null
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          email: string
          id?: string
          image_url?: string | null
        }
        Update: {
          created_at?: string
          display_name?: string | null
          email?: string
          id?: string
          image_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      category: "accessories" | "men" | "women" | "kids" | "sale"
      gender: "men" | "women" | "kids" | "unisex"
      size:
        | "4"
        | "5"
        | "6"
        | "7"
        | "8"
        | "9"
        | "10"
        | "11"
        | "12"
        | "13"
        | "4.5"
        | "5.5"
        | "6.5"
        | "7.5"
        | "8.5"
        | "9.5"
        | "10.5"
        | "11.5"
        | "12.5"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
