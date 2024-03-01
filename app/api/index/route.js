import { NextResponse } from "next/server";
import User from "@/models/user";
import url from "url";

// method: GET
// path: /api/index?name=name
// get user data by name

export async function GET(req, res) {
  const { name } = url.parse(req.url, true).query;
  const formattedName = name.replace(/-/g, ' ');
  const user = await User.findOne({ name: { $regex: new RegExp(`^${formattedName}$`, 'i') } });

  if (user) {
    return NextResponse.json(user);
  } else {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}

//method: PUT
//path: /api/index?id=id
//update user data by id

export async function PUT(req, res) {
  const { id } = url.parse(req.url, true).query;
  const body = await req.json()
  const {bio,college,branch,cgpa,location,skills,companyName,position,startDate,experience}=body;
  try {
    const user = await User.findOne({_id:{$eq:id}});
    user.bio = bio;
    user.college = college;
    user.branch = branch;
    user.cgpa = cgpa;
    user.location = location;
    user.skills = skills;
    user.companyName = companyName;
    user.position = position;
    user.startDate = startDate;
    user.experience = experience;

    await user.save();
    return NextResponse.json(user, { status: 201 });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  
}


