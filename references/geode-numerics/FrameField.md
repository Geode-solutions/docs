# class FrameField

```cpp
Defined at ../../include/geode/numerics/frame_field/frame_field.h#23
```

## Records

Impl



## Functions

### FrameField

```cpp
public void FrameField(BRep & brep)
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field.cpp#234
```

### FrameField

```cpp
public void FrameField(FrameField && other)
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field.cpp#236
```

### ~FrameField

```cpp
public void ~FrameField()
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field.cpp#241
```

### brep

```cpp
public const BRep & brep()
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field.cpp#248
```

### solid

```cpp
public const TetrahedralSolid3D & solid()
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field.cpp#243
```

### block_element

```cpp
public const MeshElement & block_element(index_t tetrahedron)
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field.cpp#252
```

### frame

```cpp
public const Frame3D & frame(index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field.cpp#257
```

### set_frame

```cpp
public void set_frame(index_t vertex, Frame3D frame)
```

```cpp
Defined at /github/workspace/src/geode/numerics/frame_field/frame_field.cpp#262
```



