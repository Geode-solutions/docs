# class VTIOutputImpl

```cpp
Defined at ../../include/geode/io/image/private/vti_output_impl.h#35
```

```cpp
Inherits from detail::VTKOutputImpl<CellArray>
```



## Functions

### VTIOutputImpl

```cpp
protected void VTIOutputImpl<CellArray>(const CellArray & array, string_view filename)
```

```cpp
Defined at ../../include/geode/io/image/private/vti_output_impl.h#40
```

### write_image_header

```cpp
protected xml_node write_image_header(pugi::xml_node & piece, const std::array<index_t, dimension> & extent)
```

```cpp
Defined at ../../include/geode/io/image/private/vti_output_impl.h#46
```



