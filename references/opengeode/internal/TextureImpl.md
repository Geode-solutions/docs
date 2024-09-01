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

# class TextureImpl


## Functions

### image

```cpp
public const RasterImage<dimension> & image()
```


### set_image

```cpp
public void set_image(RasterImage<dimension> && image)
```


### texture_coordinates_impl

```cpp
protected const Point<dimension> & texture_coordinates_impl(index_t element, local_index_t vertex)
```


### set_texture_coordinates_impl

```cpp
protected void set_texture_coordinates_impl(index_t element, local_index_t vertex, const Point<dimension> & coordinates)
```


### TextureImpl

```cpp
protected void TextureImpl<dimension>(AttributeManager & manager, basic_string_view name)
```


### TextureImpl

```cpp
protected void TextureImpl<dimension>()
```




