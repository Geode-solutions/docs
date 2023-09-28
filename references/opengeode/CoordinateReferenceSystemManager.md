# class CoordinateReferenceSystemManager

```cpp
Defined at ../../include/geode/mesh/core/coordinate_reference_system_manager.h#43
```

## Functions

### CoordinateReferenceSystemManager

```cpp
public void CoordinateReferenceSystemManager<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#173
```

### CoordinateReferenceSystemManager

```cpp
public void CoordinateReferenceSystemManager<dimension>(CoordinateReferenceSystemManager<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#179
```

### ~CoordinateReferenceSystemManager

```cpp
public void ~CoordinateReferenceSystemManager<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#187
```

### nb_coordinate_reference_systems

```cpp
public index_t nb_coordinate_reference_systems()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#193
```

### find_coordinate_reference_system

```cpp
public const CoordinateReferenceSystem<dimension> & find_coordinate_reference_system(string_view name)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#200
```

### active_coordinate_reference_system

```cpp
public const CoordinateReferenceSystem<dimension> & active_coordinate_reference_system()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#208
```

### active_coordinate_reference_system_name

```cpp
public string_view active_coordinate_reference_system_name()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#216
```

### coordinate_reference_system_names

```cpp
public absl::FixedArray<absl::string_view> coordinate_reference_system_names()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#223
```

### coordinate_reference_system_exists

```cpp
public bool coordinate_reference_system_exists(string_view name)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#230
```

### register_coordinate_reference_system

```cpp
public void register_coordinate_reference_system(string_view name, std::shared_ptr<CoordinateReferenceSystem<dimension> > && crs, CRSManagerKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#237
```

### delete_coordinate_reference_system

```cpp
public void delete_coordinate_reference_system(string_view name, CRSManagerKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#246
```

### set_active_coordinate_reference_system

```cpp
public void set_active_coordinate_reference_system(string_view name, CRSManagerKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#254
```

### modifiable_active_coordinate_reference_system

```cpp
public CoordinateReferenceSystem<dimension> & modifiable_active_coordinate_reference_system(CRSManagerKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#262
```

### modifiable_coordinate_reference_system

```cpp
public CoordinateReferenceSystem<dimension> & modifiable_coordinate_reference_system(string_view name, CRSManagerKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#270
```



# class CoordinateReferenceSystemManager

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#293
```

# class CoordinateReferenceSystemManager

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#292
```

# class CoordinateReferenceSystemManager

```cpp
Defined at /github/workspace/src/geode/mesh/core/coordinate_reference_system_manager.cpp#291
```

