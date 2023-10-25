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

# class RasterImage

# class RasterImage

# class RasterImage

# class RasterImage


```cpp
Inherits from CellArray<dimension>, Identifier
```



## Records

Impl



## Functions

### RasterImage

```cpp
public void RasterImage<dimension>()
```


### RasterImage

```cpp
public void RasterImage<dimension>(std::array<index_t, dimension> cells_number)
```


### RasterImage

```cpp
public void RasterImage<dimension>(RasterImage<dimension> && other)
```


### operator=

```cpp
public RasterImage<dimension> & operator=(RasterImage<dimension> && other)
```


### ~RasterImage

```cpp
public void ~RasterImage<dimension>()
```


### native_extension_static

```cpp
public basic_string native_extension_static()
```


### native_extension

```cpp
public basic_string native_extension()
```


### cell_index

```cpp
public index_t cell_index(const CellIndices & index)
```


### cell_indices

```cpp
public CellIndices cell_indices(index_t index)
```


### color

```cpp
public const RGBColor & color(index_t index)
```


### set_color

```cpp
public void set_color(index_t index, RGBColor color)
```


### clone

```cpp
public RasterImage clone()
```




