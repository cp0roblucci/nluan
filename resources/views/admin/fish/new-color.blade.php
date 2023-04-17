@extends('admin.layout.main')

{{-- set title --}}
@section('title', 'Create new Color')
@section('path', 'Tạo mới / Màu sắc')

@section('sidebar')
  @include('admin.layout.sidebar')
@endsection

@section('content')
  <div class="mb-2">
    @section('header')
      @include('admin.layout.header')
    @endsection

    <div class="py-4 pt-2 ml-2 text-24 font-sora text-[#5432a8]">Thêm màu sắc mới</div>
    <div class="">
      <div class="col-span-3 border p-4">
        <form action="" method="post">
          @csrf

          <div class="mt-4 ">
            <label
              for="color"
              class="text-slate-500 text-14"
            >
              Màu sắc
            </label><br>
            <div class="border-[1.5px] mt-1">
              <input
                type="text"
                name="color"
                placeholder="Nhập"
                class="pb-6 pt-1 w-full outline-none focus-within:border-blue-500 px-2 placeholder:text-14 text-14"
              >
            </div>
          </div>


          <button
            type="submit"
            class="border-2 border-blue-500 p-2 px-6 mt-4 flex hover:bg-slate-100"
          >
            Thêm
          </button>

        </form>
      </div>

    </div >
  </div>

@endsection

@section('footer')
  @include('admin.layout.footer')
@endsection