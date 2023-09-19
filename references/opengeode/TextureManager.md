# class TextureManager


# class TextureManager


# class TextureManager


# class TextureManager


## Functions

### TextureManager

```cpp
public void TextureManager<dimension>(AttributeManager & manager, TextureStorage<dimension> & textures)
```


### TextureManager

```cpp
public void TextureManager<dimension>(TextureManager<dimension> && other)
```


### ~TextureManager

```cpp
public void ~TextureManager<dimension>()
```


### nb_textures

```cpp
public index_t nb_textures()
```


### find_or_create_texture

```cpp
public Texture<dimension> & find_or_create_texture(string_view name)
```


### find_texture

```cpp
public const Texture<dimension> & find_texture(string_view name)
```


### texture_names

```cpp
public absl::FixedArray<absl::string_view> texture_names()
```


### texture_exists

```cpp
public _Bool texture_exists(string_view name)
```


### delete_texture

```cpp
public void delete_texture(string_view name)
```




