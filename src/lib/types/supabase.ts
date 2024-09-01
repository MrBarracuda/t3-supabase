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
      addresses: {
        Row: {
          address_line_1: string | null
          address_line_2: string | null
          city: string | null
          country: string | null
          created_at: string
          id: number
          phone_number: string | null
          postal_code: string | null
          title: string | null
          user_id: number | null
        }
        Insert: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          id?: number
          phone_number?: string | null
          postal_code?: string | null
          title?: string | null
          user_id?: number | null
        }
        Update: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          id?: number
          phone_number?: string | null
          postal_code?: string | null
          title?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "addresses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      cart: {
        Row: {
          created_at: string
          id: number
          total: number | null
          updated_at: string | null
          user_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          total?: number | null
          updated_at?: string | null
          user_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          total?: number | null
          updated_at?: string | null
          user_id?: number | null
        }
        Relationships: []
      }
      cart_item: {
        Row: {
          cart_id: number | null
          created_at: string
          id: number
          product_id: number | null
          products_sku_id: number | null
          quantity: number | null
          updated_at: string | null
        }
        Insert: {
          cart_id?: number | null
          created_at?: string
          id?: number
          product_id?: number | null
          products_sku_id?: number | null
          quantity?: number | null
          updated_at?: string | null
        }
        Update: {
          cart_id?: number | null
          created_at?: string
          id?: number
          product_id?: number | null
          products_sku_id?: number | null
          quantity?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string
          deleted_at: string | null
          description: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      order_details: {
        Row: {
          created_at: string
          id: number
          payment_id: number | null
          total: number | null
          updated_at: string | null
          user_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          payment_id?: number | null
          total?: number | null
          updated_at?: string | null
          user_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          payment_id?: number | null
          total?: number | null
          updated_at?: string | null
          user_id?: number | null
        }
        Relationships: []
      }
      order_item: {
        Row: {
          created_at: string
          id: number
          order_id: number | null
          product_id: number | null
          products_sku_id: number | null
          quantity: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          order_id?: number | null
          product_id?: number | null
          products_sku_id?: number | null
          quantity?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          order_id?: number | null
          product_id?: number | null
          products_sku_id?: number | null
          quantity?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      payment_details: {
        Row: {
          amount: number | null
          created_at: string
          id: number
          order_id: number | null
          provider: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          id?: number
          order_id?: number | null
          provider?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          id?: number
          order_id?: number | null
          provider?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      "product_ attributes": {
        Row: {
          created_at: string
          deleted_at: string | null
          id: number
          type: string | null
          value: string | null
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          type?: string | null
          value?: string | null
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          type?: string | null
          value?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          category_id: number | null
          color: string | null
          created_at: string
          deleted_at: string | null
          description: string | null
          id: number
          name: string | null
          price: string | null
          sku: string | null
        }
        Insert: {
          category_id?: number | null
          color?: string | null
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          price?: string | null
          sku?: string | null
        }
        Update: {
          category_id?: number | null
          color?: string | null
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          price?: string | null
          sku?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      products_skus: {
        Row: {
          color_attribute_id: number | null
          created_at: string
          deleted_at: string | null
          id: number
          price: string | null
          product_id: number | null
          quantity: number | null
          size_attribute_id: number | null
          sku: string | null
        }
        Insert: {
          color_attribute_id?: number | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          price?: string | null
          product_id?: number | null
          quantity?: number | null
          size_attribute_id?: number | null
          sku?: string | null
        }
        Update: {
          color_attribute_id?: number | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          price?: string | null
          product_id?: number | null
          quantity?: number | null
          size_attribute_id?: number | null
          sku?: string | null
        }
        Relationships: []
      }
      sub_categories: {
        Row: {
          created_at: string
          deleted_at: string | null
          description: string | null
          id: number
          name: string | null
          parent_id: number | null
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          parent_id?: number | null
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          parent_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "sub_categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          avatar: string | null
          created_at: string
          date_of_birth: string | null
          email: string
          first_name: string | null
          id: number
          last_name: string | null
          password: string | null
          phone_number: string | null
          username: string
        }
        Insert: {
          avatar?: string | null
          created_at?: string
          date_of_birth?: string | null
          email: string
          first_name?: string | null
          id?: number
          last_name?: string | null
          password?: string | null
          phone_number?: string | null
          username: string
        }
        Update: {
          avatar?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string
          first_name?: string | null
          id?: number
          last_name?: string | null
          password?: string | null
          phone_number?: string | null
          username?: string
        }
        Relationships: []
      }
      wishlist: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: number
          product_id: number | null
          user_id: number | null
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          product_id?: number | null
          user_id?: number | null
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          product_id?: number | null
          user_id?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
