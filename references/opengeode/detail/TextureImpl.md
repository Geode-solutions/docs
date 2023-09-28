# class TextureImpl

```cpp
Defined at ../../include/geode/mesh/core/private/texture_impl.h#40
```

## Functions

### image

```cpp
public const RasterImage<dimension> & image()
```

```cpp
Defined at ../../include/geode/mesh/core/private/texture_impl.h#49
```

### set_image

```cpp
public void set_image(RasterImage<dimension> && image)
```

```cpp
Defined at ../../include/geode/mesh/core/private/texture_impl.h#54
```

### texture_coordinates_impl

```cpp
protected const Point<dimension> & texture_coordinates_impl(index_t element, local_index_t vertex)
```

```cpp
Defined at ../../include/geode/mesh/core/private/texture_impl.h#60
```

### set_texture_coordinates_impl

```cpp
protected void set_texture_coordinates_impl(index_t element, local_index_t vertex, const Point<dimension> & coordinates)
```

```cpp
Defined at ../../include/geode/mesh/core/private/texture_impl.h#72
```

### TextureImpl

```cpp
public void TextureImpl<dimension>(AttributeManager & manager, string_view name)
```

```cpp
Defined at ../../include/geode/mesh/core/private/texture_impl.h#87
```

### TextureImpl

```cpp
protected void TextureImpl<dimension>()
```

```cpp
Defined at ../../include/geode/mesh/core/private/texture_impl.h#95
```



