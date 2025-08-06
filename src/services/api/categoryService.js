import categoriesData from "@/services/mockData/categories.json";

class CategoryService {
  constructor() {
    this.categories = [...categoriesData];
  }

  async getAll() {
    await this.delay();
    return [...this.categories];
  }

  async getById(id) {
    await this.delay();
    const category = this.categories.find(c => c.Id === parseInt(id));
    if (!category) {
      throw new Error("Category not found");
    }
    return { ...category };
  }

  async getByType(type) {
    await this.delay();
    return this.categories.filter(c => c.type === type);
  }

  delay() {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 200 + 100));
  }
}

export const categoryService = new CategoryService();