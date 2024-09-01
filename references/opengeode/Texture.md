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

# class Texture


## Functions

### Texture

```cpp
public void Texture(const Texture<2> & )
```


### operator=

```cpp
public Texture<2> & operator=(const Texture<2> & )
```


### Texture

```cpp
public void Texture(AttributeManager & manager, basic_string_view name)
```


### Texture

```cpp
public void Texture(Texture<2> && other)
```


### ~Texture

```cpp
public void ~Texture()
```


### image

```cpp
public const RasterImage2D & image()
```


### set_image

```cpp
public void set_image(RasterImage2D && image)
```


### texture_coordinates

```cpp
public const Point2D & texture_coordinates(const PolygonVertex & vertex)
```


### set_texture_coordinates

```cpp
public void set_texture_coordinates(const PolygonVertex & vertex, const Point2D & coordinates)
```




# class Texture

# class Texture


## Functions

### Texture

```cpp
public void Texture(const Texture<3> & )
```


### operator=

```cpp
public Texture<3> & operator=(const Texture<3> & )
```


### Texture

```cpp
public void Texture(AttributeManager & manager, basic_string_view name)
```


### Texture

```cpp
public void Texture(Texture<3> && other)
```


### ~Texture

```cpp
public void ~Texture()
```


### image

```cpp
public const RasterImage3D & image()
```


### set_image

```cpp
public void set_image(RasterImage3D && image)
```


### texture_coordinates

```cpp
public const Point3D & texture_coordinates(const PolyhedronVertex & vertex)
```


### set_texture_coordinates

```cpp
public void set_texture_coordinates(const PolyhedronVertex & vertex, const Point3D & coordinates)
```




# class Texture


## Functions

### Texture

```cpp
public void Texture(const Texture<1> & )
```


### operator=

```cpp
public Texture<1> & operator=(const Texture<1> & )
```


### Texture

```cpp
public void Texture(AttributeManager & manager, basic_string_view name)
```


### Texture

```cpp
public void Texture(Texture<1> && other)
```


### ~Texture

```cpp
public void ~Texture()
```


### image

```cpp
public const RasterImage1D & image()
```


### set_image

```cpp
public void set_image(RasterImage1D && image)
```


### texture_coordinates

```cpp
public const Point1D & texture_coordinates(const EdgeVertex & vertex)
```


### set_texture_coordinates

```cpp
public void set_texture_coordinates(const EdgeVertex & vertex, const Point1D & coordinates)
```




