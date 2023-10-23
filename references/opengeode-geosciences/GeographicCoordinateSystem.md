# class GeographicCoordinateSystem

# class GeographicCoordinateSystem

```cpp
Inherits from AttributeCoordinateReferenceSystem<dimension>
```

## Records

Info

## Functions

### GeographicCoordinateSystem

```cpp
public void GeographicCoordinateSystem<dimension>(AttributeManager & manager, Info info)
```

### ~GeographicCoordinateSystem

```cpp
public void ~GeographicCoordinateSystem<dimension>()
```

### create_from_attribute

```cpp
public GeographicCoordinateSystem create_from_attribute(const AttributeCoordinateReferenceSystem<dimension> & crs, AttributeManager & manager, Info info)
```

### type_name_static

```cpp
public NamedType type_name_static()
```

### type_name

```cpp
public NamedType type_name()
```

### info

```cpp
public const Info & info()
```

### geographic_coordinate_systems

```cpp
public absl::FixedArray<Info> geographic_coordinate_systems()
```

### import_coordinates

```cpp
public void import_coordinates(const GeographicCoordinateSystem<dimension> & crs)
```

### geographic_coordinate_systems

```cpp
public int geographic_coordinate_systems()
```

# class GeographicCoordinateSystem
