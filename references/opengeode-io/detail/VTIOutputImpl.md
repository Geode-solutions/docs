# class VTIOutputImpl

```cpp
Inherits from detail::VTKOutputImpl<CellArray>
```

## Functions

### VTIOutputImpl

```cpp
protected void VTIOutputImpl<CellArray>(const CellArray & array, string_view filename)
```

### write_image_header

```cpp
protected xml_node write_image_header(pugi::xml_node & piece, const std::array<index_t, dimension> & extent)
```
