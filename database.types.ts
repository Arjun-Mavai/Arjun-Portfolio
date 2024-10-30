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
      about_section: {
        Row: {
          content: string | null
          id: number
          image_url: string | null
          title: string | null
        }
        Insert: {
          content?: string | null
          id?: number
          image_url?: string | null
          title?: string | null
        }
        Update: {
          content?: string | null
          id?: number
          image_url?: string | null
          title?: string | null
        }
        Relationships: []
      }
      blogs: {
        Row: {
          content: string | null
          created_at: string
          id: number
          reading_time: string | null
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          reading_time?: string | null
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          reading_time?: string | null
          title?: string | null
        }
        Relationships: []
      }
      books: {
        Row: {
          content: string
          created_at: string | null
          expiry: string
          id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          expiry: string
          id?: string
        }
        Update: {
          content?: string
          created_at?: string | null
          expiry?: string
          id?: string
        }
        Relationships: []
      }
      cards: {
        Row: {
          created_at: string
          description: string
          id: string
          image_url: string
          likes: number | null
          title: string
          views: number | null
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          image_url: string
          likes?: number | null
          title: string
          views?: number | null
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          image_url?: string
          likes?: number | null
          title?: string
          views?: number | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string | null
          id: string
          name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      comments: {
        Row: {
          blog_id: number | null
          comment: string | null
          created_at: string
          id: number
        }
        Insert: {
          blog_id?: number | null
          comment?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          blog_id?: number | null
          comment?: string | null
          created_at?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "comments_blog_id_fkey"
            columns: ["blog_id"]
            isOneToOne: false
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
        }
        Relationships: []
      }
      footer: {
        Row: {
          copyright_text: string | null
          id: number
          social_links: Json | null
        }
        Insert: {
          copyright_text?: string | null
          id?: number
          social_links?: Json | null
        }
        Update: {
          copyright_text?: string | null
          id?: number
          social_links?: Json | null
        }
        Relationships: []
      }
      form_submissions: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          multiple_image_urls: string[] | null
          single_image_url: string | null
          title: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          multiple_image_urls?: string[] | null
          single_image_url?: string | null
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          multiple_image_urls?: string[] | null
          single_image_url?: string | null
          title?: string
        }
        Relationships: []
      }
      header: {
        Row: {
          id: number
          logo_url: string | null
          nav_items: Json | null
        }
        Insert: {
          id?: number
          logo_url?: string | null
          nav_items?: Json | null
        }
        Update: {
          id?: number
          logo_url?: string | null
          nav_items?: Json | null
        }
        Relationships: []
      }
      hero_section: {
        Row: {
          background_image_url: string | null
          cta_link: string | null
          cta_text: string | null
          id: number
          subtitle: string | null
          title: string | null
        }
        Insert: {
          background_image_url?: string | null
          cta_link?: string | null
          cta_text?: string | null
          id?: number
          subtitle?: string | null
          title?: string | null
        }
        Update: {
          background_image_url?: string | null
          cta_link?: string | null
          cta_text?: string | null
          id?: number
          subtitle?: string | null
          title?: string | null
        }
        Relationships: []
      }
      images: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          url: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          url: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          url?: string
        }
        Relationships: []
      }
      likes: {
        Row: {
          blog_id: number | null
          created_at: string
          id: number
          user_id: string | null
        }
        Insert: {
          blog_id?: number | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Update: {
          blog_id?: number | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "likes_blog_id_fkey"
            columns: ["blog_id"]
            isOneToOne: false
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          },
        ]
      }
      mid_section: {
        Row: {
          content: string | null
          id: number
          image_url: string | null
          title: string | null
        }
        Insert: {
          content?: string | null
          id?: number
          image_url?: string | null
          title?: string | null
        }
        Update: {
          content?: string | null
          id?: number
          image_url?: string | null
          title?: string | null
        }
        Relationships: []
      }
      new_notes: {
        Row: {
          category_id: string | null
          content: string
          created_at: string | null
          expiry: string | null
          id: string
          images: string[] | null
          is_deleted: boolean | null
          premium: boolean | null
          title: string
          user_id: string | null
        }
        Insert: {
          category_id?: string | null
          content: string
          created_at?: string | null
          expiry?: string | null
          id?: string
          images?: string[] | null
          is_deleted?: boolean | null
          premium?: boolean | null
          title?: string
          user_id?: string | null
        }
        Update: {
          category_id?: string | null
          content?: string
          created_at?: string | null
          expiry?: string | null
          id?: string
          images?: string[] | null
          is_deleted?: boolean | null
          premium?: boolean | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "new_notes_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      new_notes_duplicate: {
        Row: {
          category_id: string | null
          content: string
          created_at: string | null
          expiry: string | null
          id: string
          images: string[] | null
          is_deleted: boolean | null
          premium: boolean | null
          user_id: string | null
        }
        Insert: {
          category_id?: string | null
          content: string
          created_at?: string | null
          expiry?: string | null
          id?: string
          images?: string[] | null
          is_deleted?: boolean | null
          premium?: boolean | null
          user_id?: string | null
        }
        Update: {
          category_id?: string | null
          content?: string
          created_at?: string | null
          expiry?: string | null
          id?: string
          images?: string[] | null
          is_deleted?: boolean | null
          premium?: boolean | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "new_notes_duplicate_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      new_table: {
        Row: {
          category_id: string | null
          content: string
          created_at: string | null
          expiry: string | null
          id: number
          images: string[] | null
          is_deleted: boolean | null
          premium: boolean | null
          title: string
          user_id: string | null
        }
        Insert: {
          category_id?: string | null
          content: string
          created_at?: string | null
          expiry?: string | null
          id?: number
          images?: string[] | null
          is_deleted?: boolean | null
          premium?: boolean | null
          title?: string
          user_id?: string | null
        }
        Update: {
          category_id?: string | null
          content?: string
          created_at?: string | null
          expiry?: string | null
          id?: number
          images?: string[] | null
          is_deleted?: boolean | null
          premium?: boolean | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "new_table_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      notes: {
        Row: {
          content: string | null
          created_at: string
          expiry: string | null
          id: number
        }
        Insert: {
          content?: string | null
          created_at?: string
          expiry?: string | null
          id?: number
        }
        Update: {
          content?: string | null
          created_at?: string
          expiry?: string | null
          id?: number
        }
        Relationships: []
      }
      products: {
        Row: {
          created_at: string | null
          features: Json
          gallery_images: Json
          id: string
          model_name: string
          showcase_images: Json
          tech_specs: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          features: Json
          gallery_images: Json
          id?: string
          model_name: string
          showcase_images: Json
          tech_specs: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          features?: Json
          gallery_images?: Json
          id?: string
          model_name?: string
          showcase_images?: Json
          tech_specs?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
        }
        Relationships: []
      }
      register: {
        Row: {
          created_at: string | null
          email: string
          id: number
          name: string
          password: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: number
          name: string
          password: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: number
          name?: string
          password?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          content: string | null
          id: number
          image_url: string | null
          name: string | null
        }
        Insert: {
          content?: string | null
          id?: number
          image_url?: string | null
          name?: string | null
        }
        Update: {
          content?: string | null
          id?: number
          image_url?: string | null
          name?: string | null
        }
        Relationships: []
      }
      views: {
        Row: {
          blog_id: number | null
          created_at: string
          id: number
          user_id: string | null
        }
        Insert: {
          blog_id?: number | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Update: {
          blog_id?: number | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "views_blog_id_fkey"
            columns: ["blog_id"]
            isOneToOne: false
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          },
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

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
