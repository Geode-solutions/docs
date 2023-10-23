# class FrameField

## Records

Impl

## Functions

### FrameField

```cpp
public void FrameField(BRep & brep)
```

### FrameField

```cpp
public void FrameField(FrameField && other)
```

### ~FrameField

```cpp
public void ~FrameField()
```

### brep

```cpp
public const BRep & brep()
```

### solid

```cpp
public const TetrahedralSolid3D & solid()
```

### block_element

```cpp
public const MeshElement & block_element(index_t tetrahedron)
```

### frame

```cpp
public const Frame3D & frame(index_t vertex)
```

### set_frame

```cpp
public void set_frame(index_t vertex, Frame3D frame)
```
