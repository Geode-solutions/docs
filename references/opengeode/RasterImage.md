# class RasterImage

# class RasterImage

# class RasterImage

# class RasterImage

```cpp
Defined at ../../include/geode/image/core/raster_image.h#40
```

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

```cpp
Defined at /github/workspace/src/geode/image/core/raster_image.cpp#82
```

### RasterImage

```cpp
public void RasterImage<dimension>(std::array<index_t, dimension> cells_number)
```

```cpp
Defined at /github/workspace/src/geode/image/core/raster_image.cpp#92
```

### RasterImage

```cpp
public void RasterImage<dimension>(RasterImage<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/image/core/raster_image.cpp#100
```

### operator=

```cpp
public RasterImage<dimension> & operator=(RasterImage<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/image/core/raster_image.cpp#108
```

### ~RasterImage

```cpp
public void ~RasterImage<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/image/core/raster_image.cpp#87
```

### native_extension_static

```cpp
public basic_string native_extension_static()
```

```cpp
Defined at ../../include/geode/image/core/raster_image.h#54
```

### native_extension

```cpp
public basic_string native_extension()
```

```cpp
Defined at ../../include/geode/image/core/raster_image.h#61
```

### cell_index

```cpp
public index_t cell_index(const CellIndices & index)
```

```cpp
Defined at /github/workspace/src/geode/image/core/raster_image.cpp#117
```

### cell_indices

```cpp
public CellIndices cell_indices(index_t index)
```

```cpp
Defined at /github/workspace/src/geode/image/core/raster_image.cpp#124
```

### color

```cpp
public const RGBColor & color(index_t index)
```

```cpp
Defined at /github/workspace/src/geode/image/core/raster_image.cpp#131
```

### set_color

```cpp
public void set_color(index_t index, RGBColor color)
```

```cpp
Defined at /github/workspace/src/geode/image/core/raster_image.cpp#137
```

### clone

```cpp
public RasterImage clone()
```

```cpp
Defined at /github/workspace/src/geode/image/core/raster_image.cpp#143
```



