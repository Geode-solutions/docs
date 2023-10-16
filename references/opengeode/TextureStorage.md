# class TextureStorage


# class TextureStorage


# class TextureStorage


# class TextureStorage


## Functions

### TextureStorage

```cpp
public void TextureStorage<>()
```


### TextureStorage

```cpp
public void TextureStorage<>(TextureStorage<> && other)
```


### ~TextureStorage

```cpp
public void ~TextureStorage<>()
```


### nb_textures

```cpp
public index_t nb_textures(TextureManagerKey )
```


### find_or_create_texture

```cpp
public Texture<dimension> & find_or_create_texture(AttributeManager & manager, string_view name, TextureManagerKey )
```


### find_texture

```cpp
public const Texture<dimension> & find_texture(string_view name, TextureManagerKey )
```


### texture_names

```cpp
public int texture_names(TextureManagerKey )
```


### texture_exists

```cpp
public bool texture_exists(string_view name, TextureManagerKey )
```


### delete_texture

```cpp
public void delete_texture(string_view name, TextureManagerKey )
```




