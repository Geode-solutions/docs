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
public void TextureImpl<dimension>(AttributeManager & manager, string_view name)
```


### TextureImpl

```cpp
protected void TextureImpl<dimension>()
```




