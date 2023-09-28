# class TextureManager

```cpp
Defined at /github/workspace/src/geode/mesh/core/texture_manager.cpp#143
```

# class TextureManager

```cpp
Defined at /github/workspace/src/geode/mesh/core/texture_manager.cpp#144
```

# class TextureManager

```cpp
Defined at /github/workspace/src/geode/mesh/core/texture_manager.cpp#145
```

# class TextureManager

```cpp
Defined at ../../include/geode/mesh/core/texture_manager.h#42
```

## Functions

### TextureManager

```cpp
public void TextureManager<dimension>(AttributeManager & manager, TextureStorage<dimension> & textures)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/texture_manager.cpp#85
```

### TextureManager

```cpp
public void TextureManager<dimension>(TextureManager<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/texture_manager.cpp#92
```

### ~TextureManager

```cpp
public void ~TextureManager<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/texture_manager.cpp#98
```

### nb_textures

```cpp
public index_t nb_textures()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/texture_manager.cpp#103
```

### find_or_create_texture

```cpp
public Texture<dimension> & find_or_create_texture(string_view name)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/texture_manager.cpp#109
```

### find_texture

```cpp
public const Texture<dimension> & find_texture(string_view name)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/texture_manager.cpp#116
```

### texture_names

```cpp
public absl::FixedArray<absl::string_view> texture_names()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/texture_manager.cpp#123
```

### texture_exists

```cpp
public bool texture_exists(string_view name)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/texture_manager.cpp#130
```

### delete_texture

```cpp
public void delete_texture(string_view name)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/texture_manager.cpp#137
```



