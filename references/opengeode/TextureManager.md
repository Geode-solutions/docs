<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

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
public Texture<dimension> & find_or_create_texture(basic_string_view name)
```


### find_texture

```cpp
public const Texture<dimension> & find_texture(basic_string_view name)
```


### texture_names

```cpp
public absl::FixedArray<std::string_view> texture_names()
```


### texture_exists

```cpp
public bool texture_exists(basic_string_view name)
```


### delete_texture

```cpp
public void delete_texture(basic_string_view name)
```




